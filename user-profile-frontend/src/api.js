const API_URL = 'http://127.0.0.1:8000/api/profiles/';

export async function fetchProfiles() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function fetchProfile(id) {
    const response = await fetch(`${API_URL}${id}/`);
    return response.json();
}

export async function createProfile(profile) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
    });
    return response.json();
}

export async function updateProfile(id, profile) {
    const response = await fetch(`${API_URL}${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
    });
    return response.json();
}

export async function deleteProfile(id) {
    await fetch(`${API_URL}${id}/`, {
        method: 'DELETE',
    });
}
