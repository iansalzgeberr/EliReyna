import React from "react";
import styled from "styled-components";

const SobreMiContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #000; /* Fondo negro */
    color: #fff; /* Texto blanco */
`;

const TitleContainer = styled.div`
    align-self: flex-start;
    margin-bottom: 15px;
    padding-left: 35px;
    font-size: 1.5rem;
    `;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    padding-right: 20px;
    padding-left: 50px;
    

    @media (min-width: 768px) {
        width: auto;
    }
`;

const TextContainer = styled.div`
    flex: 2;
    font-size: 1.2rem;
    line-height: 1.5; /* Reducir el espacio entre líneas */
    padding-left: 30px;
    padding-top: 20px;
    font-size: 1.9rem;
    

    @media (min-width: 768px) {
        padding-top: 0;
    }
`;


const Title = styled.h2`
    color: #fff; /* Color blanco */
`;

const HighlightedText = styled.span`
    color: yellow; /* Color amarillo */
`;

const SobreMi = () => {
    const imageUrl = 'https://img.freepik.com/foto-gratis/hombre-tiro-completo-haciendo-burpees-entrenador_23-2149445904.jpg';

    return (
        <SobreMiContainer>
        <TitleContainer>
            <Title>
            Sobre <HighlightedText>Mí</HighlightedText>
            </Title>
        </TitleContainer>
        <ContentContainer>
        <ImageContainer>
            <img
                src={imageUrl}
                alt="Entrenadora"
                style={{ width: "100%", borderRadius: "10px" }}
            />
            </ImageContainer>
            <div style={{ backgroundColor: "#000", flex: 1 }}>
            <TextContainer>
                <p>
                ¡Hola! Soy Eli Reyna, entrenadora de fitness certificada. Mi
                pasión es ayudarte a alcanzar tus metas de salud y bienestar a
                través de planes de entrenamiento personalizados. Con años de
                experiencia, te guiaré hacia un estilo de vida activo y saludable,
                no solo físicamente, sino también emocionalmente. ¡Espero ser tu
                compañera en este emocionante viaje hacia una vida más saludable!
                </p>
            </TextContainer>
            </div>
        </ContentContainer>
        </SobreMiContainer>
    );
};

export default SobreMi;
