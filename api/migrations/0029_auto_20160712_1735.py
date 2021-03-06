# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-12 15:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_auto_20160711_1727'),
    ]

    operations = [
        migrations.AddField(
            model_name='sightinginfo',
            name='imageCover_ca',
            field=models.ImageField(blank=True, null=True, upload_to='info_images/'),
        ),
        migrations.AddField(
            model_name='sightinginfo',
            name='imageCover_de',
            field=models.ImageField(blank=True, null=True, upload_to='info_images/'),
        ),
        migrations.AddField(
            model_name='sightinginfo',
            name='imageCover_en',
            field=models.ImageField(blank=True, null=True, upload_to='info_images/'),
        ),
        migrations.AddField(
            model_name='sightinginfo',
            name='image_ca',
            field=models.ImageField(blank=True, null=True, upload_to='info_images/'),
        ),
        migrations.AddField(
            model_name='sightinginfo',
            name='image_de',
            field=models.ImageField(blank=True, null=True, upload_to='info_images/'),
        ),
        migrations.AddField(
            model_name='sightinginfo',
            name='image_en',
            field=models.ImageField(blank=True, null=True, upload_to='info_images/'),
        ),
    ]
