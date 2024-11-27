import Box from "./box";
import { SortState } from "../../../../libs/utility";

export const COLOR_MAP = {
  SORTED: "#4cd137",
  COMPARING: "#fbc531",
  SWAPPING: "#e84118",
  HOLDING: "#dcdde1",
};

const sortBoard = ({ state, maxNumber, length }) => {
  let width = 100 / length;
  let resize = 300 / (maxNumber + 1);

  return (
    <>
      <div className="flex flex-row gap-1">
        {state.getCurrentState().map((value) => {
          let color = state.isValueAtRightPlace(value)
            ? COLOR_MAP.SORTED
            : COLOR_MAP.HOLDING;
          if (state.isValueToBeHighlighted(value)) {
            color =
              state.getState() === SortState.SWAPPING
                ? COLOR_MAP.SWAPPING
                : COLOR_MAP.COMPARING;
          }

          return (
            <Box
              key={value}
              width={width}
              height={resize * (value + 1)}
              color={color}
              value={value}
            />
          );
        })}
      </div>
    </>
  );
};

export default sortBoard;
