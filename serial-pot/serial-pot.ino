const int buttonPin = 2;
void setup() {
  Serial.begin(9600); // initialize serial communications
  pinMode(buttonPin,INPUT);
}
 
void loop() {
  int button = digitalRead(buttonPin);                  

  // print it out the serial port:
  Serial.println(button);                             
  // slight delay to stabilize the ADC:
  delay(50);
                                          
}
