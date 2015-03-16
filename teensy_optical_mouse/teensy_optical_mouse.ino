#include <Encoder.h>

// doesn't work. the bits are coming in way too fast
const int dplus = 0; // pin 0 of teensy gets raw 'usb' data (straight from D+)
const int a = 1;
const int b = 2;
Encoder myEnc(a,b);

int posit;

char in_bytes[6];
int out;

void setup() {
  Serial.begin(38400);
  pinMode(dplus, INPUT);// not using
}

void loop() {
//  in_bytes[0] = digitalRead(dplus);
//  Serial.println(in_bytes[0]);
//  out = digitalRead(dplus);
//  Serial.println(out);
  posit = myEnc.read();
  Serial.println(posit);
}
