import React, { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
import axios from 'axios';


const PostRequest = () => {

	const postLoginData = () => {
    axios
      .post('https://reqres.in/api/login', {
        email: '',
				password:''
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

	return (
		[]
	)

}

export default PostRequest;

const styles = StyleSheet.create({
	btn: {
		marginTop: 60,
		marginLeft: 30,
		marginRight: 30
	}
})
