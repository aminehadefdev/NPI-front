class fetchAPI {
  constructor(url) {
      this.url = url;
  }

  async get(params) {
      const requestOptions = {
          method: "GET",
          redirect: "follow"
      };
      
      try {
          const response = await fetch(`${this.url}/${params}`, requestOptions);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return await response.json();
      } catch (error) {
          console.error("Error in GET request:", error);
          throw error;
      }
  }

  async post(params, body = null) {
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body ? JSON.stringify(body) : null,
          redirect: "follow"
      };
      
      try {
          const response = await fetch(`${this.url}/${params}`, requestOptions);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return await response.json();
      } catch (error) {
          console.error("Error in POST request:", error);
          throw error;
      }
  }
}

export default fetchAPI;
