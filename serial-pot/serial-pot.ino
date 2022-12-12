int pressuresensor = A0;
int sensorValue=0;

void setup() {
  Serial.begin(9600);
  pinMode(pressuresensor,INPUT);
}

void loop() {
  sensorValue = analogRead(pressuresensor);
  Serial.println("sensorValue=");
  Serial.println(sensorValue); 
  delay(1000);    
}