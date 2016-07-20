# -*- coding: utf-8 -*- 
from django.contrib import admin

from api.models import *

class SightingAdmin(admin.ModelAdmin):

    list_display = ('id', 'user', 'location','created_at')
    fieldsets = [('Información básica', {'fields': ['id',('created_at', 'source')]}), 
    ('Datos del usuario', {'fields': [('user', 'contact')]}), 
    ('Localización del avispamiento', {'fields': [('location', 'lat', 'lng')]}),
    ('Datos del avispamiento', {'fields': [('type','glosario_tipos'), 'free_text', 'foto_avispamiento', ('respuestas_preguntas')]}),
    ('Estado del avispamiento', {'fields': [('public'), ('status', 'glosario_estados'), ('is_valid', 'moderator')]}),
    ('Comentarios de expertos', {'fields': ['comentarios_expertos']}),
    ('Comentarios de usuarios', {'fields': ['comentarios_usuarios']}),]
    readonly_fields = ['id','created_at', 'foto_avispamiento', 'glosario_tipos', 'glosario_estados','respuestas_preguntas', 'comentarios_expertos','comentarios_usuarios',]
    list_filter = ('created_at','status','type', 'public', 'is_valid', 'source', 'location', )


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active')
    fieldsets = [('Pregunta', {'fields': [('title', 'title_en'), ('title_ca', 'title_de'), ('question_type', 'glosario_preguntas'), ('sighting_type', 'glosario_tipo_pregunta'), 'order','is_active']}),]
    readonly_fields = ['glosario_preguntas','glosario_tipo_pregunta',]
    list_filter = ('question_type',)


class AnswerAdmin(admin.ModelAdmin):
    list_display = ('question', 'value', 'created_at')
    fieldsets = [('Respuesta', {'fields': ['created_at', 'question', ('value', 'value_en'), ('value_ca','value_de')]}),]
    readonly_fields = ['created_at',]
    list_filter = ('question',)


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user',)
    fieldsets = [('Perfil del usuario', {'fields': ['user', ('foto_usuario', 'photo')]}),]
    readonly_fields = ['foto_usuario',]


class SightingInfoAdmin(admin.ModelAdmin):
    list_display = ('title',)
 
    fieldsets = [('Título', {'fields': [('title', 'title_en'), ('title_ca', 'title_de')]}),
    ('Breve explicación', {'fields': ['quickBody', 'quickBody_ca', 'quickBody_en','quickBody_de']}),
    ('Explicación más detallada', {'fields':['body', 'body_ca', 'body_en', 'body_de']}),
    ('Foto',{'fields':[('foto_portada', 'imageCover'), ('foto_portada_ca', 'imageCover_ca'),
                       ('foto_portada_en', 'imageCover_en'), ('foto_portada_de', 'imageCover_de'),
                       ('foto_info', 'image'), ('foto_info_ca', 'image_ca'),
                       ('foto_info_en', 'image_en'), ('foto_info_de', 'image_de')]}),]
 
    readonly_fields = ['foto_portada', 'foto_info', 'foto_portada_ca', 'foto_info_ca', 'foto_portada_en', 'foto_info_en', 'foto_portada_de', 'foto_info_de']


class PictureAdmin(admin.ModelAdmin):
    list_display = ('id', 'sighting', 'created_at')
    fieldsets = [('Foto', {'fields': ['id', 'sighting', 'created_at', ('foto', 'file')]}),]
    readonly_fields = ['id', 'foto', 'created_at']


class UserCommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'body', 'sighting')
    list_filter = ('sighting', 'user',)


class ExpertCommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'body', 'sighting', 'is_valid')
    list_filter = ('sighting', 'user', 'is_valid')
    
class AppVersionAdmin(admin.ModelAdmin):
    list_display = ('version', 'message')
    list_filter = ('version', 'message')
    
    fieldsets = [('App Android',{'fields': ['version', 'message', 'message_ca', 'message_en', 'message_de']})]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
admin.site.register(Sighting, SightingAdmin)
admin.site.register(Picture, PictureAdmin)
admin.site.register(UserComment, UserCommentAdmin)
admin.site.register(ExpertComment, ExpertCommentAdmin)
admin.site.register(SightingInfo, SightingInfoAdmin)
admin.site.register(Location)
admin.site.register(Province)
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(AppVersion, AppVersionAdmin)

#class AnswerAdmin (admin.ModelAdmin):
 #   model=Sighting
  #  filter_horizontal = ('answers',)
    # exclude = ('source',)