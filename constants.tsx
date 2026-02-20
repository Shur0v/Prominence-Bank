
import React from 'react';
import { 
  Globe, CreditCard, Landmark, Zap, ShieldCheck, 
  RefreshCcw, Cpu, LayoutGrid, DollarSign, Wallet,
  Send, Layers, Link as LinkIcon
} from 'lucide-react';

export const BRAND_COLOR = "#142643";
export const LOGO_URL = "https://my-account.prominencebank.com/assets/images/logo.png";

export const getIcon = (name: string, size = 24, className = "") => {
  const icons: Record<string, any> = {
    globe: Globe,
    creditCard: CreditCard,
    landmark: Landmark,
    zap: Zap,
    shield: ShieldCheck,
    refresh: RefreshCcw,
    cpu: Cpu,
    grid: LayoutGrid,
    dollar: DollarSign,
    wallet: Wallet,
    send: Send,
    layers: Layers,
    link: LinkIcon
  };
  const IconComponent = icons[name] || Globe;
  return <IconComponent size={size} className={className} />;
};
