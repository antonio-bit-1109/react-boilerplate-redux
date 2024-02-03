/* FETCH MODALE RIUTILIZZABILE   */

/* dispatch inserito dopo async serve per avere accesso alle action presenti nel reducer e quindi per avere accesso agli stati in redux  */
/* con il getstate puoi accedere, direttamente nella fetch ad uno stato di redux  */

export const fetchData = (url, parametroOpzionale, options, action) => async (dispatch) => {
    try {
        // Set to true before fetching

        const fetchResponse = await fetch(url + parametroOpzionale, options);

        if (!fetchResponse.ok) {
            if (fetchResponse.status > 400 && fetchResponse.status < 500) {
                if (fetchResponse.status === 429) {
                    throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
                } else {
                    throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
                }
            }
            if (fetchResponse.status > 500 && fetchResponse.status < 600) {
                throw new Error("SERVER SPOMPATO, NON FUNZIA??");
            }
        }

        const fetchData = await fetchResponse.json();
        /*     console.log(fetchData); */

        dispatch(action(fetchData));

        /*  QUALCOSA DA FARE FINITA LA FETCH ?? */
        /*   if (lastAction) {
            dispatch(lastAction());
        } */
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const fetchDelete = async (options, userId, expId) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;

    try {
        const response = await fetch(URLPOST, options);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        return response;
    } catch (error) {
        console.error(error);
    }
};

export const fetchDeleteCommentiHome = async (url) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            /*  Authorization: `Bearer ${TokenCommenti} `, */
        },
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Qualcosa è andato storto");
        }

        console.log(response);
        return response.json(); // O gestisci la risposta come preferisci
    } catch (error) {
        console.error(error);
    }
};

export const postImage = (userid, end, options) => async () => {
    try {
        // Set to true before fetching
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userid}/${end}`, options);

        if (!response.ok) {
            if (response.status > 400 && response.status < 500) {
                if (response.status === 429) {
                    throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
                } else {
                    throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
                }
            }
            if (response.status > 500 && response.status < 600) {
                throw new Error("SERVER SPOMPATO, NON FUNZIA??");
            }
        }

        const fetchData = await response.json();
        console.log(fetchData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const fetchPutCommenti = async (datas, commentId) => {
    const URLPUT = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;

    const optionsPut = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            /*   Authorization: `Bearer ${Token}`, */
        },
        body: JSON.stringify(datas),
    };

    console.log("datas", datas);

    try {
        const response = await fetch(URLPUT, optionsPut);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        console.log(response);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
