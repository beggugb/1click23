import {  ArrowLeftCircleIcon, ArrowUpTrayIcon, ArrowDownTrayIcon, ChartPieIcon, ChartBarIcon, TagIcon, ChartBarSquareIcon, PresentationChartBarIcon , BarsArrowDownIcon, BarsArrowUpIcon, ComputerDesktopIcon, ClipboardIcon,UsersIcon, DocumentTextIcon, TicketIcon , UserGroupIcon, WrenchIcon, WrenchScrewdriverIcon, Cog6ToothIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export const _icons = [
    {nicon:"ArrowUpTrayIcon",icon:<ArrowUpTrayIcon className="h-5 w-5 text-sky-500" /> },
    {nicon:"ArrowDownTrayIcon",icon:<ArrowDownTrayIcon className="h-5 w-5 text-sky-500" /> },
    {nicon:"BarsArrowDownIcon",icon:<BarsArrowDownIcon className="h-5 w-5 text-sky-500" /> },    
    {nicon:"ChartPieIcon",icon:<ChartPieIcon className="h-5 w-5 text-sky-500" /> },
    {nicon:"ChartBarIcon",icon:<ChartBarIcon className="h-5 w-5 text-sky-500" /> },
    {nicon:"ArrowLeftCircleIcon",icon:<ArrowLeftCircleIcon className="h-5 w-5 text-sky-500" /> }
]



export const getIcons = (iconId) =>{
    console.log(iconId)
    if(iconId){
        let nn = _icons.filter(item => 
            item.nicon === iconId
         )
         return nn[0].icon
    }else{
        return null
    }    
}

