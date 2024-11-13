import json
from django.shortcuts import render
from django.core.serializers import serialize  # Import the serialize function
from django.contrib.auth.decorators import login_required

from app.models import CrimeReport

@login_required
def dashboard(request):
    context = {}
    if request.user.is_staff:
        context['is_admin'] = True
    else:
        context['is_admin'] = False
    return render(request, 'dashboard.html', context)

def map_view(request):
    crime_reports = CrimeReport.objects.all()
    crime_reports_json = serialize('json', crime_reports)
    context = {
        'crime_reports_json': crime_reports_json,
    }
    return render(request, 'home.html', context)