import { SparklesText } from "@/components/magicui/sparkles-text";

export function SparklesTextDemo() {
  return (
    <SparklesText
      text=""
      className="text-4xl font-bold"
      sparklesCount={8}
      colors={{ first: '#A07CFE', second: '#FE8FB5' }}
    />
  );
}
