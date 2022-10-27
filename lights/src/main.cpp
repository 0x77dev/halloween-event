#include <Arduino.h>
#include <ArtnetWifi.h>
#include <ESPDMX.h>
#include <ArduinoOTA.h>
 
DMXESPSerial dmx;

const char *ssid = "prodigy";
const char *password = "firestarter";

WiFiUDP UdpSend;
ArtnetWifi artnet;

bool ConnectWifi(void)
{
  bool state = true;
  int i = 0;

  WiFi.begin(ssid, password);
  Serial.println("");
  Serial.println("Connecting to WiFi");

  // Wait for connection
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
    if (i > 20)
    {
      state = false;
      break;
    }
    i++;
  }
  if (state)
  {
    Serial.println("");
    Serial.print("Connected to ");
    Serial.println(ssid);
    Serial.print("IP address: ");
    Serial.println(IPAddress(WiFi.localIP()));
  }
  else
  {
    Serial.println("");
    Serial.println("Connection failed.");
  }

  return state;
}

void onDmxFrame(uint16_t universe, uint16_t length, uint8_t sequence, uint8_t *data)
{
  bool tail = false;

  Serial.print("U ");
  Serial.print(universe, DEC);
  Serial.print("S ");
  Serial.print(sequence, DEC);
  Serial.print("D (");
  Serial.print(length, DEC);
  Serial.print("): ");

  if (length > 16)
  {
    length = 16;
    tail = true;
  }

  for (int i = 0; i < length; i++)
  {
    dmx.write(i + 1, data[i]);
  }

  dmx.update();
  Serial.println("updated.");
}

void setup()
{
  Serial.begin(115200);
  dmx.init(512);
  delay(200);
  Serial.println("DMX init done");
  bool connected = ConnectWifi();

  if (!connected)
  {
    Serial.println("Connection failed");
    dmx.end();
    ESP.restart();
    return;
  }

  Serial.println("Wifi connected");

  Serial.println("OTA init done");

  artnet.setArtDmxCallback(onDmxFrame);
  artnet.begin();
  Serial.println("ArtNet started");
}

void loop()
{
  artnet.read();
}