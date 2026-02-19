import { FooterContainer, Logo, SocialLinks, Text } from "./styles";

export default function Footer() {
    return (
        <FooterContainer>
            <Logo><img src="/imagens/logo.png" alt="Logo efood" /></Logo>
            <SocialLinks>
                <a href="#">
                    <img src="/imagens/instagram.png" alt="Instagram" />
                </a>
                <a href="#">
                    <img src="/imagens/facebook.png" alt="Facebook" />
                </a>
                <a href="#">
                    <img src="/imagens/twitter.png" alt="Twitter" />
                </a>
            </SocialLinks>
            <Text>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade dos produtos é toda do
                estabelecimento contratado.
            </Text>
        </FooterContainer>
    );
}
