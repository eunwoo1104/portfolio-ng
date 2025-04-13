import ExternalLink from "@/components/ExternalLink";
import icons from "@/utils/icons";

const Links = () => {
  return (
    <div>
      <h2>링크 모음</h2>
      {/* test purpose, will be replaced later */}
      <ExternalLink url="https://github.com/eunwoo1104" icon={icons.github}>
        GitHub
      </ExternalLink>
      <p>
        이 글은 장문 속{" "}
        <ExternalLink url="https://eunwoo.dev/" linkType="paragraph">
          링크
        </ExternalLink>
        를 테스트하기 위한 목적입니다.
      </p>
      <h2>연락</h2>
      <ExternalLink url="mailto:choi@eunwoo.dev" icon={icons.mail}>
        choi@eunwoo.dev
      </ExternalLink>
      <h3>Fallback 이메일</h3>
      <ExternalLink url="mailto:sions0411@gmail.com" icon={icons.mail}>
        sions0411@gmail.com
      </ExternalLink>
      <h3>학교 이메일</h3>
      <ExternalLink url="mailto:sions0411@konkuk.ac.kr" icon={icons.mail}>
        sions0411@konkuk.ac.kr
      </ExternalLink>
      <ExternalLink url="mailto:sions0411@syuin.ac.kr" icon={icons.mail}>
        sions0411@syuin.ac.kr
      </ExternalLink>
    </div>
  );
};

export default Links;
