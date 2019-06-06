import pytest


@pytest.fixture
def dict_list():
    return [
        dict(a='a', b=3),
        dict(a='c', b=1),
        dict(a='b', b=2),
    ]


def test_sorted__key_example_1(dict_list):
    assert sorted(dict_list, key=lambda d: d['a']) == [
        dict(a='a', b=3),
        dict(a='b', b=2),
        dict(a='c', b=1),
    ]