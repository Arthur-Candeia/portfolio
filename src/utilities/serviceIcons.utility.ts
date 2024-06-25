import { serviceType } from "@/schemas/serviceType";

export function serviceIcons(service: serviceType) {
  const { MdOutlineNotificationsActive, MdLockOutline, MdMailOutline } = require('react-icons/md')
  const { FaRegCreditCard, FaWhatsapp, FaServer, FaWindows } = require('react-icons/fa')
  const { RiMapPinLine, RiAdminLine, RiFolder6Line } =  require("react-icons/ri");
  const { FiSmartphone, FiCamera } = require('react-icons/fi')
  const { SiGoogleanalytics } = require("react-icons/si")
  const { AiOutlineGlobal } = require('react-icons/ai')
  const { IoRocketOutline } = require("react-icons/io5")
  const { BsChatLeftDots } = require('react-icons/bs')
  const { TbCloudUp } = require('react-icons/tb')
  const { LuPlane } = require("react-icons/lu")

  switch (service) {
    case 'aplicativos': return [FiSmartphone, MdOutlineNotificationsActive, FaRegCreditCard, RiMapPinLine, RiAdminLine, BsChatLeftDots, TbCloudUp, FiCamera]

    case 'criacao-de-sites': return [FiSmartphone, FaRegCreditCard, MdLockOutline, FaWhatsapp, RiMapPinLine, IoRocketOutline, TbCloudUp, SiGoogleanalytics]

    case 'sistemas-web': return [FiSmartphone, FaRegCreditCard, MdLockOutline, RiAdminLine, FaServer, AiOutlineGlobal, TbCloudUp, MdMailOutline]

    case 'softwares-desktop': return [FaWindows, MdLockOutline, IoRocketOutline, RiAdminLine, FaServer, RiFolder6Line, TbCloudUp, LuPlane]
  }
}