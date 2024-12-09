from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Location, Crime, appUser

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('location_id', 'city', 'division')
    search_fields = ('city', 'division')
    list_filter = ('city', 'division')

@admin.register(Crime)
class CrimeAdmin(admin.ModelAdmin):
    list_display = ('crime_id', 'type', 'date_time', 'address', 'latitude', 'longitude', 'location')
    search_fields = ('type', 'description')
    list_filter = ('type', 'date_time', 'location', 'status')
    autocomplete_fields = ['location']

@admin.register(appUser)
class CustomUserAdmin(UserAdmin):
    # You can display custom fields here for the User model
    list_display = ('username', 'email', 'role', 'last_login', 'date_joined')
    list_filter = ('role', 'is_active', 'last_login')  # Use valid filter fields
    search_fields = ('username', 'email')
