from django.urls import path, include
from django.conf.urls import url, include

urlpatterns = [
    url('loadmap/', include('glaceon.apps.loadmap.urls')),
    url('member/', include('glaceon.apps.member.urls'))
]
