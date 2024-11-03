// pages/NpmChecker.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NpmChecker = () => {
  const [packageName, setPackageName] = useState('');

  const checkPackageName = async () => {
    if (!packageName.trim()) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please enter a package name before checking.',
        icon: 'warning',
        confirmButtonText: 'Okay',
      });
      return;
    }

    Swal.fire({
      title: 'Checking...',
      html: '<div class="spinner-border text-info"></div>',
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    try {
      const response = await fetch(`https://corsmirror.com/v1?url=https://registry.npmjs.com/${packageName}`);
      Swal.close();

      Swal.fire({
        title: response.status === 404
          ? `The package "<b>${packageName}</b>" is available!`
          : `The package "<b>${packageName}</b>" is already taken.`,
        icon: response.status === 404 ? 'success' : 'error',
        confirmButtonText: 'Okay',
      });
    } catch {
      Swal.close();
      Swal.fire({
        title: 'Error',
        text: 'Error checking package name. Try again later.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="text-center">
      <h2>Check NPM Package Availability</h2>
      <input 
        type="text" 
        className="form-control my-3"
        placeholder="Enter NPM package name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={checkPackageName}>Check</button>
    </div>
  );
};

export default NpmChecker;
