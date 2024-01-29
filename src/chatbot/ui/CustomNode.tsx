import { Presets, ClassicScheme, RenderEmit } from "rete-react-plugin";
import { css } from "styled-components";
import { $fontfamily } from "./consts";

const styles = css<{ selected?: boolean }>`
  background: #002c8c;
  border: 5px #c5c7c9 solid;
  border-radius: 25px;
  transition: background 0.4s;
  .title {
    color: white;
    text-align: center;
    border-radius: 20px 20px 0 0;
    border-bottom: 5px #c5c7c9 solid;
    font-family: ${$fontfamily};
    font-weight: 100;
    font-size: 1.2em;
  }
  &:hover {
    background: #02006c;
  }
  .input-title,
  .output-title {
    font-weight: 100;
    font-family: ${$fontfamily};
  }
  .output-socket {
    margin-right: -1px;
  }
  .input-socket {
    margin-left: -1px;
  }
  ${(props) =>
    props.selected &&
    css`
      border-color: ##373b3d;
      .title {
        border-color: ##373b3d;
      }
    `}
`;

type Props<S extends ClassicScheme> = {
  data: S["Node"];
  styles?: () => any;
  emit: RenderEmit<S>;
};

export function CustomNodeComponent<S extends ClassicScheme>(props: Props<S>) {
  return <Presets.classic.Node styles={() => styles} {...props} />;
}
