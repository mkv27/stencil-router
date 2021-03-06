import { VNode } from "@stencil/core/dist/declarations";
import { ActiveRouter } from '../../global/interfaces';

export const RouterSwitch = ({ children }: { [key: string]: any}) => {
  const activeRouter: ActiveRouter = (window as any).stencilrouter.Context.activeRouter;
  const groupId = activeRouter.createGroup(children.length);

  const chil = children.map((child: VNode, index: number) => {
    child.vattrs.group = groupId;
    child.vattrs.groupIndex = index;
    return child;
  });

  return (
    <div>
      { chil }
    </div>
  )
};
