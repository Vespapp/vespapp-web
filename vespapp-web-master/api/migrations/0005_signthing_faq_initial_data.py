# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-11 23:33
from __future__ import unicode_literals

from django.db import migrations

def load_data(apps, schema_editor):
    SightingFAQ = apps.get_model("api", "SightingFAQ")

    SightingFAQ(title="¿Qué es la avispa asiática?",
         body="""La avispa asiática (Vespa velutina) es una especie de avispa de la familia de los véspidos originaria de China.
 
Esta avispa, al igual que otras de su género, se alimenta de insectos (hormigas, mariposas, pulgones, etc.), pero también de abejas, aunque esta especie es más agresiva que otras. Es fácilmente distinguible
 por su tórax y su abdomen de color negro, exceptuando el cuarto segmento, de color amarillo. Sus patas de color marrón destacan por sus extremos amarillos. Sus alas son de un color oscuro. Es una especie diurna.
 Está naturalmente aclimatada a un medio ambiente subtropical templado. Se encuentra en el continente asiático hasta el norte de la India y en las montañas de China, en las zonas geográficas donde el clima es sim
ilar al del oeste de Europa (esto explica su buena adaptación en Europa).3
 
El tamaño varía según el alimento, el paraje y la temperatura, aunque es una de las especies de mayor tamaño.[cita requerida]"""
         ).save()
    SightingFAQ(title="¿por qué es importante tu colaboración?", 
          body="""entre marzo y mayo las avispas reinas construyen unos nidos pequeños, de unos cinco centímetros, en los que colocan sus huevos; se trata de nidos primarios y es a finales de verano cuando cada una de las reinas construye otro nido en el que produce unas 200 nuevas reinas y entre 1.500 y 3.000 avispas obreras. son nidos de gran tamaño que se ubican en las copas de los árboles, a mucha altura del suelo, y son más difíciles de localizar y destruir. 


por eso destacamos la importancia de la implicación ciudadana en estos casos, ya que la detección y eliminación de estos nidos pequeños supone una reducción considerable del número de futuros avisperos de mayor tamaño. por cada uno de estos nidos que se destruyen ahora evitamos 200 nidos, es decir, 200 avispas reinas y entre 1.500 y 3.000 avispas obreras. estos nidos además son más accesibles que los que se construyen en los siguientes meses y se suelen detectar en árboles y arbustos, buhardillas, trasteros, garajes, o en fachadas orientadas al sur, en terrazas, ventanas, balcones o techados.""",
         ).save() 
    SightingFAQ(title="¿Qué hacer en caso de ver un nido?", 
          body=""" * No se acerque a menos de 5 metros del avispero.
 * No intente provocarlo ni retirarlo por sus medios.

CONTACTE CON LA GUARDIA MUNICIPAL EN EL TLF. 092, facilitando la ubicación exacta del mismo.

Es muy importante que los ciudadanos informen de los nidos detectados para poder eliminarlos. Hay que contactar a través del 092 con la Guardia Municipal. Y en el caso de localizar un avispero grande se recomienda no acercarse a menos de cinco metros, y no intentar retirarlo por medios propios.

En estas labores están implicados los Bomberos, el servicio de Sanidad, y la Guardia Municipal, así como los guardias forestales de la Diputación Foral de Gipuzkoa.""",
         ).save()
  

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_sightingfaq'),
    ]

    operations = [
        migrations.RunPython(load_data) 
    ]
