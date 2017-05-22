from django.core.management import BaseCommand
import json

from api.models import Location
from api.models import Province


class Command(BaseCommand):

    def handle(self, *args, **options):
        """
        Insert all location.json file locations on data base
        """
        print("Inserting data...")

        p = Province()
        p.name = "Islas Baleares"
        p.save()

        with open('data/locations.json', 'r') as f:
            location_str = f.read()
            locations = json.loads(location_str)

        province = Province.objects.get(name="Islas Baleares")
        for location in locations:
            l = Location()
            l.lat = location.get('lat')
            l.lng = location.get('lng')
            l.name = location.get('name')
            l.name_ca = location.get('name')
            l.province = province
            l.save()
