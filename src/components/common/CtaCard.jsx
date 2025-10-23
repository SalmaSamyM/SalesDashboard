import clsx from "clsx";

export default function CtaCard({
  // Layout
  align = "left", // left / center
  className = "",
  style = {}, // overall container style

  // Icon
  icon,
  iconStyle = {},

  // Title
  title,
  titleStyle = {},

  // Description
  description,
  descriptionStyle = {},

  // Children
  children,
}) {
  return (
    <div
      className={clsx(
        "relative rounded-2xl shadow-md flex flex-col overflow-hidden p-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      style={style}
    >
      {/* Icon */}
      {icon && (
        <div
          className={clsx("flex items-center justify-center rounded-xl mb-3")}
          style={iconStyle}
        >
          {typeof icon === "string" ? (
            <img src={icon} alt="Icon" style={iconStyle} />
          ) : (
            icon
          )}
        </div>
      )}

      {/* Title */}
      {title && <div style={titleStyle}>{title}</div>}

      {/* Description */}
      {description && <div style={descriptionStyle}>{description}</div>}

      {/* Children */}
      {children}
    </div>
  );
}
