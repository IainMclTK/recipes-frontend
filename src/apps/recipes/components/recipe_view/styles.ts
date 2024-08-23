import styled, { css } from 'styled-components';

const boxShadow = css`
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 24%), 0px 4px 3px 0px rgb(0 0 0 / 22%);
`;

export const RecipeView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-radius: 5px;
    padding: 1rem;
    width: 90%;
    ${boxShadow}
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 95%;
`;

export const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
`;

export const Author = styled.p`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
`;

export const Ingredients = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${boxShadow} 
    border-radius: 5px;
    padding: 1rem;
    width: 95%;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ListItem = styled.li`
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export const IngredientsHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const EditButton = styled.div`
    border: none;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    color: #3f51b5;
    transition: color 0.2s;

    &:hover {
        color: #303f9f;
        text-decoration: underline;
    }
`;

export const DeleteButton = styled.button`
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: #f44336;
    width: 2.5rem;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #d32f2f;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
`;

export const CanEditBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;
