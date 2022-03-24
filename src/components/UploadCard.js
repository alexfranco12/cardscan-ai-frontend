import React, { useState } from "react";
import styled from "styled-components";

export const UploadCard = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false)

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData();

		formData.append('image', selectedFile);
    fetch(`http://localhost:3001/scan-document`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
      const { upload_parameters } = result.details
      const headers = {
        "Content-Disposition": upload_parameters["Content-Disposition"],
        "Content-Type": "multipart/form-data",
        // "region": "us-east-1",
        "key": upload_parameters["key"],
        "policy": upload_parameters["policy"],
        "x-amz-algorithm": upload_parameters["x-amz-algorithm"],
        "x-amz-credential": upload_parameters["x-amz-credential"],
        "x-amz-date": upload_parameters["x-amz-date"],
        "x-amz-meta-cardscan-account-id": upload_parameters["x-amz-meta-cardscan-account-id"],
        "x-amz-meta-cardscan-card-id": upload_parameters["x-amz-meta-cardscan-card-id"],
        "x-amz-security-token": upload_parameters["x-amz-security-token"],
        "x-amz-signature": upload_parameters["x-amz-signature"],
      }

      fetch(`${result.details.upload_url}`, {
        method: 'POST',
        // mode: 'cors',
        headers: headers,
        body: formData,
      })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
	};

  return (  
    <UploadCardStyled>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
    </UploadCardStyled>
  );
};

const UploadCardStyled = styled.div``;