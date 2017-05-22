from django.core.management import BaseCommand
import json

from api.models import Location

class Command(BaseCommand):

    def handle(self, *args, **options):
        """
        Insert all location.json file locations on data base
        """
        print("Updating data...")

        locations = Location.objects.all()

        for l in locations:
            l.name_ca = l.name
            l.save()
