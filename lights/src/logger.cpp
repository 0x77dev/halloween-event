#include <Arduino.h>

void initLogger() {
  Serial.begin(115200);
}

void println(const char *s)
{
  Serial.println(s);
}

void print(const char *s)
{
  Serial.print(s);
}
