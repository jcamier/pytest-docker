import pytest
import requests


@pytest.fixture
def assign_url():
    return "http://127.0.0.1:8000/api/leads/"


def test_http_response(assign_url):
    assert assign_url == "http://127.0.0.1:8000/api/leads/"


def test_requests_get_fail(assign_url):
    url = assign_url
    r = requests.get(url)
    requests_text = r.text
    assert requests_text is None


def test_requests_get(assign_url):
    url = assign_url
    r = requests.get(url)
    requests_text = r.text
    assert requests_text is not None


def test_requests_http_status_code(assign_url):
    url = assign_url
    r = requests.get(url)
    requests_status_code = r.status_code
    assert requests_status_code == 200
