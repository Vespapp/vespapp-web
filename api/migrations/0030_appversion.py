# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-18 09:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0029_auto_20160712_1735'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppVersion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('version', models.CharField(max_length=128, verbose_name='Versión')),
                ('message', models.TextField(default='Está usando una versión antigua de Vespapp.', max_length=512, verbose_name='Mensaje')),
                ('message_ca', models.TextField(default='Està utilitzant una versió antiga de Vespapp.', max_length=512, verbose_name='Missatge_ca')),
                ('message_en', models.TextField(default='You are using an old version of Vespapp.', max_length=512, verbose_name='Message_en')),
                ('message_de', models.TextField(default='Sie verwenden eine ältere Version von Vespapp.', max_length=512, verbose_name='Nachricht_de')),
            ],
        ),
    ]
