from django.http import JsonResponse
import subprocess
import json


def scan_website(request):
    # retrive domain param from url query
    domain = request.GET.get("domain", "")

    # guard
    if not domain:
        return JsonResponse({"error": "No domain provided"}, status=400)

    try:
        # run the docker container as a separte process
        result = subprocess.run(
            [
                "docker",
                "run",
                "--network",
                "host",
                "projectdiscovery/httpx",  # selct httpx package
                "-u",  # input target host to probe
                domain,  # specifies the target domain
                "-fr",  # follow http redirects
                "-j",  # outputs results in JSON format
            ],
            capture_output=True,
            text=True,
            encoding="utf-8",  # for wordpress website that require urf input
        )
        # return scan result json
        return JsonResponse({"scan_result": json.loads(result.stdout)})
    # error handeling
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
