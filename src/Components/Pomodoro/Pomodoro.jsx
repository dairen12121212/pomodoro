import { Timer } from "../Timer/Timer";
import "./Pomodoro.css";

export const Pomodoro = () => {
  return (
    <div className="pomodoro">
      <div className="pomodoro__header">header</div>
      <div className="pomodoro__wrapper">
        <Timer minutes={25} />
      </div>
      {/* добавить кнопку старт\стоп */}
      {/* после нажатия на старт, выезжают 2 кнопки стоп и завершить */}
    </div>
  );
};
