import React from 'react'


export const Card = ({className,children}) => {
    
    return (
        <div className={className}>
            {children}
        </div>
    )
}
/*

Örnek Kullanım:

Card componenti iki tane alt element almalıdır.
Card componenti classname olarak card, alt componentler ile sırasıyla front ve back değerlerinin yazılması zorunludur.

<Card className="card">
        <div className='front'>
          front
        </div>
        <div className='back'>
          back
        </div>
      </Card>

*/