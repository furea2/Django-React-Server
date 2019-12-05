from django.urls import path, include

urlpatterns = [
    path('loadmap/', include('glaceon.apps.loadmap.urls')),
]
