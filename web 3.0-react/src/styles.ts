import styled from 'styled-components'

export const Container = styled.section`
    display: flex; 
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #121212;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #27272A;
    padding: 16px 0;
`;

export const Logo = styled.div`
    padding: 6px 20px;
    background: rgba(218, 218, 218, 0.33);
    border-radius: 8px;
`;

export const TextContainer = styled.section`
    width: 791px;
    margin: 0 auto;
    margin-top: 96px;
    background-color: #121212;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: center;    
    line-height: 160%;
    color: #FFFFFF;
`;

export const Technologies = styled.div`
    margin: 0 auto;
    margin-top: 61px;
    padding: 22px 56px;
    padding-right: 0;
    background: #27272A;
    border: 1px solid #9D4B00;
    border-radius: 8px;
    ul {
        column-count: 3;
        gap: 100px;
    }
`;

export const Tech = styled.strong`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #EDEDED;
`;

export const Flag = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 126px;
    height: 48px;
    background: #27272A;
    border-radius: 8px;
    cursor: pointer;
`;

export const FlagSpan = styled.span`
    margin-left: 8px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #EDEDED;
`;

export const Footer = styled.header`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
    margin-top: auto;
    padding-bottom: 28px;
`;