import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { GlobeIcon } from 'lucide-react';

const LANG = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: '한국어' },
];

interface IProps {
  className?: string;
}

export const LangSelect = ({ className }: IProps) => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  return (
    <Select
      value={language}
      onValueChange={(x) => changeLanguage(x)}
      name="language-select"
    >
      <SelectTrigger className={cn('w-[120px]', className)} name="language-btn">
        <GlobeIcon size={16} className="inline mr" />
        <SelectValue>
          {LANG.find((x) => x.value === language)?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {LANG.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
