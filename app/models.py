from django.db import models

class CrimeReport(models.Model):
    location = models.CharField(max_length=100)
    crime_type = models.CharField(max_length=100)
    intensity = models.IntegerField()
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f"{self.crime_type} in {self.location} (Intensity: {self.intensity})"
