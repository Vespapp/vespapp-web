"""
Django settings for vespapp project.

Generated by 'django-admin startproject' using Django 1.9.4.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.9/ref/settings/
"""
from decouple import config
import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_DIR = os.path.dirname(os.path.realpath(__file__))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG')

if DEBUG:

    ALLOWED_HOSTS = ['*']

else:

    ALLOWED_HOSTS = ['127.0.0.1', 'localhost', 'www.vespapp.uib.es', 'vespapp.uib.es']

    # HTTP Strict Transport Security
    # Which indicates browsers that future requests for the next year should use only HTTPS.
    # SECURE_HSTS_SECONDS = 31536000

    # Only set this to True if you are certain that all subdomains of your domain should be served exclusively via SSL
    # SECURE_HSTS_INCLUDE_SUBDOMAINS = True

    # so your pages will not be served with an 'x-content-type-options: nosniff' header.
    # You should consider enabling this header to prevent the browser from identifying content types incorrectly.
    SECURE_CONTENT_TYPE_NOSNIFF = True

    # so your pages will not be served with an 'x-xss-protection: 1; mode=block' header.
    # You should consider enabling this header to activate the browser's XSS filtering and help prevent XSS attacks.
    SECURE_BROWSER_XSS_FILTER = True

    # Unless your site should be available over both SSL and non-SSL connections, you may want to either set
    # this setting True or configure a load balancer or reverse-proxy server to redirect all connections to HTTPS.
    # SECURE_SSL_REDIRECT = True

    # Using a secure-only session cookie makes it more difficult for network traffic sniffers to hijack user sessions.
    # SESSION_COOKIE_SECURE = True

    #  Using a secure-only CSRF cookie makes it more difficult for network traffic sniffers to steal the CSRF token.
    # which means browsers may ensure that the cookie is only sent under an HTTPS connection.
    # CSRF_COOKIE_SECURE = True

    # Using an HttpOnly CSRF cookie makes it more difficult for cross-site scripting attacks to steal the CSRF token.
    # CSRF_COOKIE_HTTPONLY = True

    # The default is 'SAMEORIGIN', but unless there is a good reason for your site to serve other parts of itself
    # in a frame, you should change it to 'DENY'.
    X_FRAME_OPTIONS = 'DENY'

# Application definition

BASE_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

VENDOR_APPS = (
    'rest_framework',
    'rest_framework.authtoken',
)

MY_APPS = (
    'web',
    'api',
)

INSTALLED_APPS = BASE_APPS + VENDOR_APPS + MY_APPS


MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'vespapp.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'web/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.i18n',
            ],
        },
    },
]

from django.utils.translation import ugettext_lazy as _
_ = lambda s: s
LANGUAGES = (
    ('es', _('Spanish')),
    ('ca', _('Catalan')),
)

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)

WSGI_APPLICATION = 'vespapp.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'es-ES'
#LANGUAGE_CODE = 'ca'

TIME_ZONE = 'Europe/Madrid'

USE_I18N = True

USE_L10N = True

USE_TZ = True

#LANGUAGES = (
#    ('ca', ugettext('Catalan')),
#    ('es-ES', ugettext('Spanish')),
#)

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/


STATIC_ROOT = os.path.join(PROJECT_DIR, 'static')
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(PROJECT_DIR, 'staticfiles'),
)

MEDIA_ROOT = os.path.join(PROJECT_DIR, 'media')
MEDIA_URL = '/media/'

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    )#,
    #'DEFAULT_PERMISSION_CLASSES': (
    #    'rest_framework.permissions.IsAuthenticated',
    #),
    #'DEFAULT_AUTHENTICATION_CLASSES': (
    #    'rest_framework.authentication.TokenAuthentication',
    #)
}


# Registration form
ACCOUNT_ACTIVATION_DAYS = 7
LOGIN_URL = '/accounts/login/'
LOGOUT_URL = '/accounts/logout/'


#Email
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_PORT = config('EMAIL_PORT')
EMAIL_USE_TLS = True
