from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def dashboard_data(request):
    return Response({
        'projects_completed': 12,
        'services_offered': 6,
        'compliance_accuracy': '100%'
    })
