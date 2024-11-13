from django.contrib import admin
from .models import CrimeReport

@admin.register(CrimeReport)
class CrimeReportAdmin(admin.ModelAdmin):
    list_display = ('location', 'crime_type', 'intensity', 'latitude', 'longitude')
