type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
};

export function Checklist<Data>({ data, id, primary, secondary }: Props<Data>) {
  return (
    <ul className="bg-gray-300 rounded p-10">
      {data.map((item) => {
        const idValue = item[id] as unknown;
        if (typeof idValue !== "string" && typeof idValue !== "number") {
          return null;
        }
        const primaryText = item[primary] as unknown;
        if (typeof primaryText !== "string") {
          return null;
        }
        const secondaryText = item[secondary] as unknown;
        if (typeof secondaryText !== "string") {
          return null;
        }

        return (
          <li
            key={idValue}
            className="bg-white p-6 shadow rounded mb-4 last:mb-0"
          >
            <div className="text-xl text-gray-800 pb-1">
              {primaryText}
              <div className="text-sm text-gray-500">{secondaryText}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
