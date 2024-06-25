import { serviceType } from "@/schemas/serviceType";

export function serviceIcons(service: serviceType) {
  const {FiSmartphone, FiCamera} = require('react-icons/fi')
  const {FaRegCreditCard, FaWhatsapp, FaServer, FaWindows, FaRegFolderOpen} = require('react-icons/fa')
  const {MdOutlineNotificationsActive, MdLockOutline, MdMailOutline} = require('react-icons/md')
  const { RiMapPinLine, RiAdminLine, RiFolder6Line } =  require("react-icons/ri");
  const {TbCloudUp} = require('react-icons/tb')
  const {AiOutlineGlobal} = require('react-icons/ai')
  const { IoRocketOutline } = require("react-icons/io5")
  const { LuPlane } = require("react-icons/lu")
  const { LiaServerSolid } = require("react-icons/lia")

  switch (service) {
    case 'aplicativos':
      const {BsChatLeftDots} = require('react-icons/bs')

      return [FiSmartphone, MdOutlineNotificationsActive, FaRegCreditCard, RiMapPinLine, RiAdminLine, BsChatLeftDots, TbCloudUp, FiCamera]
    case 'criacao-de-sites':
      const { SiGoogleanalytics } = require("react-icons/si")
    
      return [FiSmartphone, FaRegCreditCard, MdLockOutline, FaWhatsapp, RiMapPinLine, IoRocketOutline, TbCloudUp, SiGoogleanalytics]
    case 'sistemas-web':
      
      return [FiSmartphone, FaRegCreditCard, MdLockOutline, RiAdminLine, FaServer, AiOutlineGlobal, TbCloudUp, MdMailOutline]
    case 'softwares-desktop':
    
      return [FaWindows, MdLockOutline, IoRocketOutline, RiAdminLine, FaServer, RiFolder6Line, TbCloudUp, LuPlane]
  }

  return []
}