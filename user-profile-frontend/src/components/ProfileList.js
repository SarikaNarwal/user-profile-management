import React, { useState, useEffect } from 'react';
import { fetchProfiles, deleteProfile } from '../api';

function ProfileList() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        async function loadProfiles() {
            const data = await fetchProfiles();
            setProfiles(data);
        }
        loadProfiles();
    }, []);

    const handleDelete = async (id) => {
        await deleteProfile(id);
        setProfiles(profiles.filter(profile => profile.id !== id));
    };

    return (
        <div>
            <h2>User Profiles</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map(profile => (
                        <tr key={profile.id}>
                            <td>{profile.id}</td>
                            <td>{profile.firstName}</td>
                            <td>{profile.lastName}</td>
                            <td>{profile.email}</td>
                            <td>{profile.age}</td>
                            <td>
                                <button onClick={() => handleDelete(profile.id)}>Delete</button>
                                {/* Add edit button and form/modal for update functionality */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProfileList;
