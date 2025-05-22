
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { useSearchIndex } from "@/utils/searchIndex";

const SearchBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const { results, isSearching } = useSearchIndex(searchTerm);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (path: string) => {
    navigate(path);
    setOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 bg-white border-blue-100 dark:bg-gray-800 dark:border-gray-700"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2 text-blue-600 dark:text-gray-400" aria-hidden="true" />
        <span className="hidden xl:inline-flex text-gray-600 dark:text-gray-400">
          Search...
        </span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border border-gray-100 bg-gray-50 px-1.5 font-mono text-[10px] font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search across all pages..." 
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Search Results">
            {isSearching && (
              <>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="px-2 py-1.5">
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                ))}
              </>
            )}
            {!isSearching && results.map((result, i) => (
              <CommandItem
                key={i}
                value={`${result.section}-${result.key}`}
                onSelect={() => handleSelect(result.path)}
                className="flex flex-col items-start"
              >
                <div className="flex items-center w-full">
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    {result.section}
                  </span>
                  <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                    {result.path}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 truncate w-full">
                  {result.text.length > 60 ? `${result.text.substring(0, 60)}...` : result.text}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
