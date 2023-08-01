// eslint-disable-next-line import/no-unresolved
import Text from "./components/Text";
import Title from "./components/Title";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      <Title size="4xl">제목</Title>
      <Text size="xs" weight="semibold">
        안녕하세요
      </Text>
      <Logo width={500} height={300} className="pl-8 bg-slate-500" />
    </>
  );
}
