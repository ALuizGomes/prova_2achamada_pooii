import styled from "styled-components";

export const Container = styled.form`
    h2{
        color: var(--text-title);
        fount-size: 1.5rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3{
        color: var(--text-title);
        text-align: center;
        margin: 1rem 0 1rem 0
    }
    
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.50rem;

        border: 1px solid #d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1.5rem;
        background: #ffa500;
        color: #fff;
        font-size: 1rem;
        border: 0;
        border-radius: 0.50rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`

export const TiposDeMaoDeObra = styled.div`
    display: grid;
    gap: 0.5rem;
`

interface IAnswer{
    isActive: boolean;
  }

export const Pintarbotao = styled.button<IAnswer>`
        background: ${(props) => props.isActive ? '#EB144C' : '#8ED1FC'};
        border: 0;
        padding: 1rem;
        border-radius: 0.5rem;

        &:hover{
            filter: brightness(0.75);
        }
`