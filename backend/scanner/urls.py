from django.urls import path
from . import views

urlpatterns = [
    path("scan/", views.scan_website, name="scan_website"),
]
