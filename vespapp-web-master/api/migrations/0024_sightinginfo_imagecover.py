# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-05-24 09:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_auto_20160518_1655'),
    ]

    operations = [
        migrations.AddField(
            model_name='sightinginfo',
            name='imageCover',
            field=models.ImageField(blank=True, null=True, upload_to='info_images/'),
        ),
    ]
