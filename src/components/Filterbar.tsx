import { Search, Flame } from "lucide-react";
import { useState } from "react";

type FilterOption = {
  id: string;
  label: string;
  color?: string;
  borderColor?: string;
  bgColor?: string;
  icon?: React.ReactNode;
  active?: boolean;
};

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState("hot-items");
  const [searchQuery, setSearchQuery] = useState("");

  const filters: FilterOption[] = [
    {
      id: "all",
      label: "All",
      color: "#C5C5C5",
      borderColor: "#04381E",
      bgColor: "#0A1B11",
    },
    {
      id: "hot-items",
      label: "Hot Items",
      color: "#FC8483",
      borderColor: "#FC8483",
      bgColor: "rgba(255, 66, 50, 0.05)",
      icon: (
        <div className="w-[23px] h-[21px] relative">
          <div className="absolute inset-0 rounded-md bg-[#F7A0A1]" />
          <div className="absolute left-[5px] top-[3px] w-[15px] h-[15px]">
            <Flame className="w-full h-full text-[#E49C9C] mix-blend-multiply" />
          </div>
        </div>
      ),
      active: true,
    },
    {
      id: "best-sellers",
      label: "Best Sellers",
      color: "#8BD673",
      borderColor: "#8BD673",
      bgColor: "#0A1B11",
      icon: (
        <div className="w-[23px] h-[21px] relative">
          <div className="absolute inset-0 rounded-md bg-[#A4F7A0]" />
          <div className="absolute left-[4px] top-[3px] w-[15px] h-[15px]">
            <svg
              className="w-full h-full"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="15" height="15" fill="#82BE6F" rx="6" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "bundles",
      label: "Bundles",
      color: "#C5C5C5",
      borderColor: "#04381E",
      bgColor: "#0A1B11",
    },
    {
      id: "knives",
      label: "Knives",
      color: "#C5C5C5",
      borderColor: "#04381E",
      bgColor: "#0A1B11",
    },
    {
      id: "guns",
      label: "Guns",
      color: "#C5C5C5",
      borderColor: "#04381E",
      bgColor: "#0A1B11",
    },
    {
      id: "summer-specials",
      label: "Summer Specials",
      color: "#C5C5C5",
      borderColor: "#04381E",
      bgColor: "#0A1B11",
    },
  ];

  return (
    <div className="w-full justify-between rounded-[13px]  bg-[#030C08] p-5 mb-8">
      <div className="flex flex-wrap items-center gap-4">
        {/* Search Input Section */}
        <div className="relative flex-1 min-w-[300px] max-w-[533px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search something here...."
            className="w-full h-[50px] rounded-[13px] bg-[rgba(28,65,39,0.29)] pl-[20px] pr-[60px] text-[13px] font-semibold text-white placeholder:text-[rgba(170,171,173,0.52)] outline-none"
          />
          <button
            className="absolute right-[7px] top-1/2 -translate-y-1/2 w-[41px] h-[37px] rounded-lg bg-[#153022] flex items-center justify-center hover:bg-[#1a3828] transition-colors"
            aria-label="Search"
          >
            <Search className="w-[19px] h-[19px] text-white" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter, index) => (
            <div key={filter.id} className="flex items-center gap-3">
              {/* Separator after "All" */}
              {index === 1 && (
                <div
                  className="w-[2px] h-[25px] rounded-lg"
                  style={{
                    background:
                      "linear-gradient(93deg, #13E97D 2.53%, #0B8346 124.11%)",
                  }}
                />
              )}

              <button
                onClick={() => setActiveFilter(filter.id)}
                className="inline-flex items-center gap-2 px-[13px] py-2 h-[43px] rounded-[14px] border-2 transition-all hover:opacity-80"
                style={{
                  borderColor:
                    activeFilter === filter.id
                      ? filter.borderColor
                      : filter.borderColor,
                  backgroundColor: filter.bgColor,
                }}
              >
                {filter.icon && (
                  <div className="flex-shrink-0">{filter.icon}</div>
                )}
                <span
                  className="text-[13px] font-bold leading-[27px] whitespace-nowrap"
                  style={{ color: filter.color }}
                >
                  {filter.label}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
